export interface BiodataEntry {
  id: string;
  nama: string;
  email: string;
  telepon: string;
  alamat: string;
  tanggalLahir: string;
  jenisKelamin: string;
  pekerjaan: string;
  createdAt: string;
}

export const saveBiodata = (data: Omit<BiodataEntry, 'id' | 'createdAt'>) => {
  const biodata: BiodataEntry = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  
  const existingData = getBiodataList();
  const updatedData = [...existingData, biodata];
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('biodataList', JSON.stringify(updatedData));
  }
  
  return biodata;
};

export const getBiodataList = (): BiodataEntry[] => {
  if (typeof window === 'undefined') return [];
  
  const data = localStorage.getItem('biodataList');
  return data ? JSON.parse(data) : [];
};

export const isAdminLoggedIn = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return localStorage.getItem('adminLoggedIn') === 'true';
};

export const loginAdmin = (username: string, password: string): boolean => {
  // Simple authentication - in production, this should be properly secured
  if (username === 'admin' && password === 'admin123') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminLoggedIn', 'true');
    }
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminLoggedIn');
  }
};