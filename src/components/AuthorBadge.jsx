import profilePic from '../assets/profil.jpg'; // Dein Bild, anpassen!

function AuthorBadge() {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow mt-12">
      <img
        src={profilePic}
        alt="Denis Michalski"
        className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
      />
      <div>
        <div className="font-bold text-slate-900 dark:text-white">Denis Michalski</div>
        <div className="text-gray-500 dark:text-gray-300 text-sm">Autor & Gründer von Fit & Travel Blog</div>
        <a
          href="https://www.instagram.com/fitandtravelblog/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 font-semibold text-sm hover:text-yellow-400 transition"
        >
          Instagram-Profil
        </a>
      </div>
    </div>
  );
}

export default AuthorBadge;
