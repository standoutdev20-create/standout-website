// Single source of truth for the admin panel's entry path and session cookie name.
// The path is intentionally obscure (no "admin"/"login" in it) — see components/site/Footer.jsx
// for the discreet link, and middleware.js for the auth gate.
export const ADMIN_BASE = '/studio-465276'
export const ADMIN_DASHBOARD = `${ADMIN_BASE}/dashboard`
export const ADMIN_BLOGS = `${ADMIN_DASHBOARD}/blogs`
export const ADMIN_CONTACTS = `${ADMIN_DASHBOARD}/contacts`
export const ADMIN_COOKIE = 'sd_admin_session'
