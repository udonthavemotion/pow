#!/usr/bin/env node

/**
 * Quick Image Optimization Script for Party on Wheels
 * This script will compress all images in the public/images folder
 *
 * To use:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Recursively get all image files
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function optimizeImage(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const fileSizeMB = stats.size / (1024 * 1024);

    console.log(`Processing: ${filePath} (${fileSizeMB.toFixed(2)} MB)`);

    // Create a backup of the original
    const backupPath = filePath + '.original';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // Optimize the image
    await sharp(backupPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(filePath + '.tmp');

    // Replace original with optimized version
    fs.renameSync(filePath + '.tmp', filePath);

    const newStats = fs.statSync(filePath);
    const newFileSizeMB = newStats.size / (1024 * 1024);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

    console.log(`  ✓ Optimized to ${newFileSizeMB.toFixed(2)} MB (${reduction}% reduction)`);

  } catch (error) {
    console.error(`  ✗ Error optimizing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const imageFiles = getAllImageFiles(IMAGES_DIR);
  console.log(`Found ${imageFiles.length} images to optimize\n`);

  for (const file of imageFiles) {
    await optimizeImage(file);
  }

  console.log('\n✅ Image optimization complete!');
  console.log('Note: Original files have been backed up with .original extension');
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  main();
} catch (e) {
  console.error('❌ Sharp is not installed!');
  console.error('Please run: npm install --save-dev sharp');
  process.exit(1);
}