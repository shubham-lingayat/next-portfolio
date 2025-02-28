import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

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
        <motion.div // Use div instead of section for now
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            id={id}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
