import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching user role
    const userRole = 'Instructor'; // This should be fetched from user context or API

    if (userRole === 'Instructor') {
      router.push('/dashboard/instructors/me');
    }
  }, [router]);

  return <div>{children}</div>;
}