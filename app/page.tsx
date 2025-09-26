import BiodataForm from '@/components/BiodataForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sistem Biodata Online
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Silakan isi form biodata di bawah ini dengan lengkap dan benar. 
            Semua data yang Anda masukkan akan tersimpan dengan aman.
          </p>
          <div className="mt-6">
            <a
              href="/admin/login"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              Admin Login
            </a>
          </div>
        </div>
        
        <BiodataForm />
      </div>
    </div>
  );
}