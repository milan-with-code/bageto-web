import { useProductStore } from '@/store/useProductStore'
import React, { useEffect } from 'react'

const NewArrivals = () => {
    const { fetchBestSellers } = useProductStore();

    useEffect(() => {
        fetchBestSellers();
    }, [fetchBestSellers])

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className='text-center'>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
                        New Arrivals
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default NewArrivals
