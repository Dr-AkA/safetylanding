'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';


export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  return (
    
      <AnimatePresence mode="wait">
        <motion.div
          key={pathName}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
   
  );
}
