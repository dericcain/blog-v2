import Typography from 'typography';
import TypeTheme from 'typography-theme-wordpress-2012';

TypeTheme.overrideThemeStyles = () => {
  return {
    h1: {
      color: '#006db3',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      textShadow: 'none',
      backgroundImage: 'none',
      color: '#039be5',
    },
    'a:visited': {
      color: '#777',
    },
    blockquote: {
      borderLeft: '3px solid #006db3',
    },
    small: {
      color: '#888',
    }
  };
};

// delete TypeTheme.googleFonts;

const typography = new Typography(TypeTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
