// ----------------------------------------------------------------------

export const mixins = {
  // Flex
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Background
  bgBlur: (props) => {
    const color = props?.color || '#000000';
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;

    return {
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`, // Safari
      backgroundColor: `rgba(${color}, ${opacity})`,
    };
  },
  // Gradient
  bgGradient: (props) => {
    const direction = props?.direction || 'to bottom';
    const startColor = props?.startColor;
    const endColor = props?.endColor;
    const imgUrl = props?.imgUrl;
    const color = props?.color;

    if (imgUrl) {
      return {
        background: `linear-gradient(${direction}, ${startColor || color}, ${
          endColor || color
        }), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      };
    }

    return {
      background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
    };
  },
  // Hide scrollbar
  hideScrollbar: {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};
