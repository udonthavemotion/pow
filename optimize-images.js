#!/usr/bin/env node

/**
 * Quick Image Optimization Script for Party on Wheels
 * This script will compress all images in the public/images folder
 *
 * To use:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: node optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1800;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 82;

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

    // Skip if already optimized (less than 500KB)
    if (fileSizeMB < 0.5) {
      console.log(`Skipping ${path.basename(filePath)} - already optimized (${fileSizeMB.toFixed(2)} MB)`);
      return;
    }

    console.log(`Processing: ${path.basename(filePath)} (${fileSizeMB.toFixed(2)} MB)`);

    // Create a backup of the original
    const backupPath = filePath + '.original';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
      console.log(`  → Created backup: ${path.basename(backupPath)}`);
    }

    const ext = path.extname(filePath).toLowerCase();
    const isJpeg = ext === '.jpg' || ext === '.jpeg';
    const isPng = ext === '.png';

    let pipeline = sharp(backupPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
        kernel: 'lanczos3' // Best quality resize algorithm
      });

    // Apply format-specific optimization
    if (isJpeg) {
      pipeline = pipeline.jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
        progressive: true // Progressive loading for better perceived performance
      });
    } else if (isPng) {
      pipeline = pipeline.png({
        quality: PNG_QUALITY,
        compressionLevel: 9, // Max compression
        progressive: true
      });
    }

    await pipeline.toFile(filePath + '.tmp');

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

// Run the optimization
main().catch(error => {
  console.error('❌ Error running optimization:', error);
  process.exit(1);
});
