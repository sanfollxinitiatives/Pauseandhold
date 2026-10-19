'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global layout error caught:', error);

    // Auto-reload once if it's a network or chunk failure
    if (
      typeof window !== 'undefined' &&
      (error.message?.includes('Loading chunk') ||
        error.message?.includes('Failed to fetch') ||
        error.message?.includes('ChunkLoadError'))
    ) {
      const hasReloaded = sessionStorage.getItem('p_h_global_reload');
      if (!hasReloaded) {
        sessionStorage.setItem('p_h_global_reload', '1');
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Pause &amp; Hold — Reconnecting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #F8F6EF;
            color: #292C25;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            text-align: center;
          }
          .card {
            max-width: 520px;
            padding: 40px 32px;
            background: #ffffff;
            border: 1px solid #E4E2D8;
            border-radius: 28px;
            box-shadow: 0 10px 40px rgba(41, 44, 37, 0.05);
          }
          .heart-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 20px;
            color: #53664B;
          }
          .brand {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.35em;
            color: #53664B;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .title {
            font-size: 32px;
            line-height: 1.15;
            font-weight: 300;
            color: #292C25;
            margin-bottom: 16px;
          }
          .title em {
            font-style: normal;
            color: #53664B;
          }
          .desc {
            font-size: 15px;
            line-height: 1.6;
            color: #575A51;
            margin-bottom: 32px;
          }
          .btn-group {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btn-primary {
            background-color: #53664B;
            color: #F8F6EF;
            border: none;
            padding: 14px 28px;
            border-radius: 9999px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            text-decoration: none;
          }
          .btn-primary:hover {
            background-color: #3F4F39;
          }
          .btn-secondary {
            background-color: transparent;
            color: #292C25;
            border: 1px solid rgba(41, 44, 37, 0.2);
            padding: 14px 28px;
            border-radius: 9999px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            text-decoration: none;
          }
          .btn-secondary:hover {
            background-color: #EEEDE5;
          }
        `}</style>
      </head>
      <body>
        <div className="card">
          <svg
            className="heart-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21s-7.5-4.6-10-9.3C.3 8.2 2.3 4 6.3 4c2.2 0 3.7 1.3 4.6 2.6.3.4.9.4 1.2 0C13 5.3 14.5 4 16.7 4c4 0 6 4.2 4.3 7.7C19.5 16.4 12 21 12 21z" />
          </svg>

          <p className="brand">Pause &amp; Hold</p>
          <h1 className="title">
            Reconnecting to <br />
            <em>your memories.</em>
          </h1>
          <p className="desc">
            A momentary pause occurred while preparing this experience. Click below to refresh the showcase.
          </p>

          <div className="btn-group">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                sessionStorage.removeItem('p_h_global_reload');
                reset();
              }}
            >
              Refresh Page
            </button>
            <a href="/" className="btn-secondary">
              Go to Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
