import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, href, name, type }) => {
    return (
        <Helmet>
            {/* Título Estándar */}
            <title>{title} | Tu Red Inmobiliaria</title>
            <meta name='description' content={description} />

            {/* Open Graph (Para que se vea bonito en LinkedIn/WhatsApp) */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Canonical: OBLIGATORIO para Topic Clusters */}
            <link rel="canonical" href={`https://topic-3jc2.vercel.app${href}`} />
        </Helmet>
    );
};
