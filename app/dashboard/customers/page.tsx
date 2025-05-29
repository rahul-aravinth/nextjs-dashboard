import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Customers',
};

import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

export default async function Page() {
    return (
        <main className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers... (Not work ATM, Not going to write pagination logic and query logic)" />
            <Suspense fallback={<CustomersTableSkeleton />}>
                <CustomersTable />
            </Suspense>
        </main>
    );
}