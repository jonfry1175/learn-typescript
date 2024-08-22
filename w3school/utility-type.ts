// Utility types di TypeScript adalah tipe bawaan yang membantu dalam memanipulasi dan mengubah tipe lain untuk membuat tipe baru. 
// Utility types sangat berguna dalam situasi di mana Anda ingin membuat tipe baru berdasarkan tipe yang sudah ada dengan beberapa perubahan, 
// seperti membuat semua properti opsional, menghilangkan beberapa properti, atau menggabungkan tipe.

// Berikut adalah beberapa utility types yang paling umum digunakan di TypeScript:

// 1. Partial<T>
// Mengubah semua properti dalam tipe T menjadi opsional.
// Berguna ketika Anda ingin mengizinkan objek dengan hanya sebagian dari properti yang diperlukan.

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const updateUser = (user: Partial<User>) => {
    // user bisa memiliki sebagian dari properti User
  };
  
  updateUser({ name: "Alice" });
  
  
  // 2. Required<T>
  // Mengubah semua properti dalam tipe T menjadi wajib (non-optional).
  // Berguna ketika Anda ingin memastikan bahwa semua properti dalam suatu tipe harus ada.
  
  interface UserWithOptionalFields {
    id: number;
    name?: string;
    email?: string;
  }
  
  const requiredUser: Required<UserWithOptionalFields> = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
  };
  
  
  // 3. Readonly<T>
  // Mengubah semua properti dalam tipe T menjadi hanya-baca (immutable).
  // Ini berarti properti tersebut tidak dapat diubah setelah inisialisasi.
  
  interface ReadonlyUser {
    id: number;
    name: string;
  }
  
  const readonlyUser: Readonly<ReadonlyUser> = {
    id: 1,
    name: "Alice"
  };
  
  // readonlyUser.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
  
  
  // 4. Pick<T, K>
  // Membuat tipe baru dengan memilih subset properti dari tipe T berdasarkan kunci K.
  // Berguna ketika Anda hanya ingin menggunakan beberapa properti dari tipe yang lebih besar.
  
  const pickedUser: Pick<User, "id" | "name"> = {
    id: 1,
    name: "Alice"
  };
  
  
  // 5. Omit<T, K>
  // Membuat tipe baru dengan mengecualikan beberapa properti dari tipe T berdasarkan kunci K.
  // Berguna ketika Anda ingin mengecualikan properti tertentu dari suatu tipe.
  
  const omittedUser: Omit<User, "email"> = {
    id: 1,
    name: "Alice"
  };
  
  
  // 6. Record<K, T>
  // Membuat tipe objek dengan kunci K dan nilai T.
  // Berguna ketika Anda ingin membuat objek tipe dengan kunci yang diketahui dan nilai tertentu.
  
  const usersRecord: Record<string, number> = {
    "alice": 1,
    "bob": 2
  };
  
  
  // 7. Exclude<T, U>
  // Membuat tipe baru dengan mengecualikan semua elemen dari T yang juga ada di U.
  // Berguna untuk memfilter tipe dari union.
  
  type TUnion = "a" | "b" | "c";
  type UUnion = "a" | "c";
  type VExcluded = Exclude<TUnion, UUnion>; // "b"
  
  
  // 8. Extract<T, U>
  // Membuat tipe baru dengan mengekstrak semua elemen dari T yang juga ada di U.
  // Kebalikan dari Exclude.
  
  type VExtracted = Extract<TUnion, UUnion>; // "a" | "c"
  
  
  // 9. NonNullable<T>
  // Menghilangkan null dan undefined dari tipe T.
  
  type NullableType = string | number | null | undefined;
  type NonNullableType = NonNullable<NullableType>; // string | number
  
  
  // 10. ReturnType<T>
  // Mendapatkan tipe yang dikembalikan oleh fungsi T.
  
  function getUser() {
    return { id: 1, name: "Alice" };
  }
  
  type UserReturnType = ReturnType<typeof getUser>; // { id: number; name: string; }
  
  // Kesimpulan
  // Utility types di TypeScript sangat berguna untuk mengubah dan memanipulasi tipe dengan cara yang efisien dan fleksibel.
  // Mereka membantu menulis kode yang lebih modular, dapat digunakan kembali, dan mudah dikelola.
  