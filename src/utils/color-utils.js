import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function varAlpha(color, opacity) {
  return `rgba(var(${color}), ${opacity})`;
}

export function createPaletteChannel(palette) {
  const channelPalette = { ...palette };

  // Add channel properties for each color
  Object.keys(palette).forEach((key) => {
    if (typeof palette[key] === 'string' && key !== 'mode' && key !== 'contrastText') {
      const color = palette[key].substring(1); // Remove #
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
      channelPalette[`${key}Channel`] = `${r} ${g} ${b}`;
    }
  });

  return channelPalette;
}
