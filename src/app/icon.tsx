import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1px',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          <span style={{ color: '#ffffff' }}>H</span>
          <span style={{ color: '#555555' }}>/</span>
          <span style={{ color: '#ffffff' }}>S</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
