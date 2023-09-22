import React, { CSSProperties } from 'react';

interface BannerProps {
  imageSrc: string;
  altText: string;
  backgroundColor?: string;
  textColor?: string;
  title: string;
  subtitle: string;
  customStyles?: CSSProperties; // Additional styles as an object
}

function Banner({
  imageSrc,
  altText,
  backgroundColor,
  textColor,
  title,
  subtitle,
  customStyles, // Additional styles as an object
}: BannerProps) {
  const bannerStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: backgroundColor || 'rgba(242, 157, 53, 0.76)',
    color: textColor || 'white',
    padding: '20px',
    width: customStyles?.width || '375px',
    height: customStyles?.height || '100px',
    bottom: customStyles?.bottom || '-15px',
    left: '0',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <img src={imageSrc} alt={altText} style={{ width: '100%' }} />
        <div style={bannerStyle}>
          <p>{title}</p>
          <h1 className="text-5xl">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
