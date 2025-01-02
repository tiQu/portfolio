import React, {useState, useRef, useEffect} from 'react';

import './FadeInSection.scss';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
      { props.children }
    </div>
  )
}