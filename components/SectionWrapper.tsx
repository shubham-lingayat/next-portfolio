import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

// Props interface
interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
    const [hasMounted, setHasMounted] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            {...(id && { id })} // Spread only if id exists
            {...(className && { className })} // Spread only if className exists
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
