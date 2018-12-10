import React, { Component } from 'react';

export const loadScripts = scripts => {
  scripts.forEach(s => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}${s}`;
    script.async = false;
    document.body.appendChild(script);
  });
};

export const scripts = [
  'scripts/jquery-2.2.0.min.js',
  'scripts/chosen.min.js',
  'scripts/magnific-popup.min.js',
  'scripts/owl.carousel.min.js',
  'scripts/rangeSlider.js',
  'scripts/sticky-kit.min.js',
  'scripts/slick.min.js',
  'scripts/mmenu.min.js',
  'scripts/tooltips.min.js',
  'scripts/masonry.min.js',
  'scripts/jquery.counterup.min.js',
  'scripts/custom.js'
];

export default WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      loadScripts(scripts);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
