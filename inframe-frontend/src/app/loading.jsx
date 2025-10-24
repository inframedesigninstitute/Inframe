
export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="flex items-center gap-3">
                <span className="text-xl font-medium text-gray-700 animate-pulse">Loading</span>
                <div className="w-10 h-10 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Please wait while the content is loading...</p>
        </div>
    );
}