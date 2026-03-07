# React Router DOM Implementation Guide

## Overview

This application now uses React Router DOM v7 for client-side routing with lazy loading and code splitting for optimal performance.

## Installation

The following packages have been installed:

```json
{
  "dependencies": {
    "react-router-dom": "^7.13.1"
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.3.3"
  }
}
```

## Architecture

### File Structure

```
pow/
├── index.tsx              # Entry point with BrowserRouter
├── App.tsx                # Main router configuration
├── components/
│   └── HomePage.tsx       # Homepage component (all original App.tsx content)
└── pages/
    ├── ContactPage.tsx    # Contact page
    ├── TermsPage.tsx      # Terms of Service page
    └── PrivacyPage.tsx    # Privacy Policy page
```

### Routes

| Path       | Component      | Description                                    |
|------------|----------------|------------------------------------------------|
| `/`        | HomePage       | Main landing page with all sections            |
| `/contact` | ContactPage    | Contact information and form (placeholder)     |
| `/terms`   | TermsPage      | Terms of Service (placeholder)                 |
| `/privacy` | PrivacyPage    | Privacy Policy (placeholder)                   |
| `*`        | HomePage       | 404 fallback redirects to homepage             |

## Key Implementation Details

### 1. Main Entry Point (index.tsx)

The application is wrapped with `BrowserRouter` at the root level:

```tsx
import { BrowserRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
```

### 2. Router Configuration (App.tsx)

All route components are lazy-loaded using `React.lazy()` for code splitting:

```tsx
const HomePage = lazy(() => import('./components/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
```

Routes are wrapped in a `Suspense` boundary with a loading fallback:

```tsx
<Suspense fallback={<PageLoadingFallback />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
</Suspense>
```

### 3. HomePage Component (components/HomePage.tsx)

Contains all the original functionality from App.tsx:
- Navbar with navigation handlers
- Hero section
- BusFleet with bus selection
- HowItWorks, Events, About, Testimonials, FAQ sections
- Footer
- BookingModal with service menu and limo booking

**All existing functionality is preserved**, including:
- Bus booking modals
- Service menu
- Limo bookings
- Smooth scrolling to sections
- Preloading optimization

### 4. Page Components (pages/)

Three placeholder pages have been created:

**ContactPage.tsx**:
- Displays contact information
- Phone, email, hours
- Includes Navbar and Footer for consistency
- Link back to homepage

**TermsPage.tsx**:
- Terms of Service content (placeholder)
- Professionally formatted with sections
- Includes Navbar and Footer
- Link back to homepage

**PrivacyPage.tsx**:
- Privacy Policy content (placeholder)
- Covers data collection, usage, security
- Includes Navbar and Footer
- Link back to homepage

## Performance Optimizations

### Code Splitting

Each route is automatically code-split into separate JavaScript chunks:

```
dist/assets/ContactPage-C6edTDkx.js    1.94 kB │ gzip: 0.80 kB
dist/assets/TermsPage-D9qIcJy_.js      2.98 kB │ gzip: 1.14 kB
dist/assets/PrivacyPage-BRBlmjHZ.js    4.65 kB │ gzip: 1.56 kB
dist/assets/HomePage-3wGq21rv.js      22.88 kB │ gzip: 6.41 kB
```

### Lazy Loading

All route components load on-demand when the user navigates to them, reducing initial bundle size and improving time-to-interactive.

### Suspense Boundaries

Loading states are handled gracefully with a custom loading fallback component that:
- Shows a centered spinner
- Displays "Loading page..." text
- Includes proper ARIA attributes for accessibility
- Uses `role="status"` and `aria-live="polite"` for screen readers

## Navigation

### Using Link Components

To navigate between routes in components, use the `Link` component from react-router-dom:

```tsx
import { Link } from 'react-router-dom';

<Link to="/contact">Contact Us</Link>
<Link to="/terms">Terms of Service</Link>
<Link to="/privacy">Privacy Policy</Link>
```

### Programmatic Navigation

Use the `useNavigate` hook for programmatic navigation:

```tsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return <button onClick={handleClick}>Contact</button>;
}
```

### Accessing Route Parameters

Use the `useParams` hook to access URL parameters:

```tsx
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>Item ID: {id}</div>;
}
```

## Updating Navbar and Footer

To add links to the new routes in your Navbar or Footer components:

```tsx
import { Link } from 'react-router-dom';

// In Navbar or Footer
<Link to="/contact" className="nav-link">Contact</Link>
<Link to="/terms" className="nav-link">Terms</Link>
<Link to="/privacy" className="nav-link">Privacy</Link>
```

## Accessibility Features

All routing components follow accessibility best practices:

1. **Loading States**: Proper ARIA attributes (`role="status"`, `aria-live="polite"`)
2. **Focus Management**: Links have proper focus indicators
3. **Semantic HTML**: All pages use semantic structure (header, main, footer)
4. **Screen Reader Support**: Descriptive labels and proper heading hierarchy

## Testing

### Development Server

Test the routing locally:

```bash
npm run dev
```

Visit:
- http://localhost:3000/ - Homepage
- http://localhost:3000/contact - Contact page
- http://localhost:3000/terms - Terms page
- http://localhost:3000/privacy - Privacy page

### Production Build

Build and preview the production version:

```bash
npm run build
npm run preview
```

## Next Steps

1. **Update Placeholder Content**: Replace placeholder text in ContactPage, TermsPage, and PrivacyPage with actual content.

2. **Add Contact Form**: Implement a functional contact form in ContactPage.tsx with validation and submission handling.

3. **Update Legal Pages**: Add real Terms of Service and Privacy Policy content (consult with legal team).

4. **Add Links in Footer**: Update the Footer component to include links to /contact, /terms, and /privacy pages.

5. **Add 404 Page**: Create a custom 404 page instead of redirecting to homepage:
   ```tsx
   <Route path="*" element={<NotFoundPage />} />
   ```

6. **Add Meta Tags**: Implement dynamic meta tags for SEO using react-helmet or similar.

7. **Analytics**: Add route change tracking for analytics (Google Analytics, etc.).

## Server Configuration

For production deployment, ensure your server is configured to handle client-side routing:

### Vercel (Already Configured)

The existing `vercel.json` should handle this, but verify it includes:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Apache

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Troubleshooting

### Issue: 404 on Page Refresh

**Cause**: Server not configured to handle client-side routing.

**Solution**: Add server rewrite rules (see Server Configuration above).

### Issue: Blank Page After Navigation

**Cause**: Component failed to load or has runtime error.

**Solution**: Check browser console for errors. Verify component exports are correct.

### Issue: Slow Route Transitions

**Cause**: Large component bundles.

**Solution**: Further split components or preload critical routes.

## Best Practices

1. **Always use lazy loading** for route components to optimize bundle size.

2. **Provide meaningful loading states** to improve perceived performance.

3. **Implement error boundaries** for each route to handle component errors gracefully.

4. **Use Link components** instead of anchor tags for internal navigation to leverage client-side routing.

5. **Preload critical routes** on user interaction (hover, focus) for instant navigation.

6. **Test all routes** in production build before deployment.

7. **Keep route configuration** in App.tsx centralized for easy maintenance.

## TypeScript Support

All components are fully typed with TypeScript. Route parameters and navigation hooks have proper type inference.

For custom route parameters:

```tsx
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const params = useParams<RouteParams>();
```

## Conclusion

React Router DOM is now fully integrated into your application with:
- Clean, maintainable routing structure
- Optimal performance through code splitting
- Accessibility compliance
- Full TypeScript support
- All existing functionality preserved

The implementation follows React best practices and is ready for production use.
