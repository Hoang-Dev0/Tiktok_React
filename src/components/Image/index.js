import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets';
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...rest }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...rest}
            onError={handleError}
        />
    );
});

export default Image;
