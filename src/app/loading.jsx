import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Skeleton */}
      <div className="h-20 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-10 w-40" />
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-20">
        <Skeleton className="w-full h-[400px]" />
      </div>

      {/* Quick Info Section Skeleton */}
      <div className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories Skeleton */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Outpatient Services Skeleton */}
      <div className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
