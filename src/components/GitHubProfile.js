import React, { useEffect, useState } from 'react';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('GitHub profil bilgileri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!profile) {
    return <p>Profil bulunamadı.</p>;
  }

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Hi, I'm {profile.name || profile.login}
        <br />
        23 Years Old
        <br />
        Jr. Full-Stack Developer
      </h2>
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
    </div>
  );
};

export default GitHubProfile;
