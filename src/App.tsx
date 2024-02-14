// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';
import InstagramStats from './components/InstagramStats'; // 新しいページコンポーネントをインポート
import CreatorInfo from './components/CreatorInfo'; // コンポーネントをインポート
import SDGsInfo from './components/SDGsInfo'; // コンポーネントをインポート
import Gifts from './components/Gifts';
import InstagramRanking from './components/InstagramRanking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLine } from '@fortawesome/free-brands-svg-icons';
import Rewards from './components/Rewards';

function App() {
  const rankingData = [
    { category: "総いいね数一位", name: "ふつうのマヨネーズ", value: 10000 , imageUrl:"https://github.com/tatashir/images/assets/115047593/2af2e487-dfb0-4ca6-8bf0-484aa6986622"},
    // 他のカテゴリのランキングデータも同様に
  ];
  return (
    <Router>
      <div>
        <nav style={{ borderBottom: '1px solid', marginBottom: '20px', paddingBottom: '10px' }}>
        <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link> | <Link to="/instagram-stats">インスタの統計</Link> | <Link to="/rewards">リワード</Link> | <Link to="/gifts">ギフト</Link>
        </nav>
        <InstagramRanking ranking={rankingData} />
        <Routes>
          <Route path="/" element={
            <>
              <Products />
              <CreatorInfo
                name="[監修] 鳥羽 周作"
                bio="ニューワールドのオーナーシェフ. sio株式会社 / シズる株式会社 総料理責任者。"
                imageUrl="https://github.com/kknowk/kknowk/assets/131352588/2a5f6c0f-e6dc-4d58-9dca-fbda5d33cfe6"
              />
              <SDGsInfo /> 
              <div style={{ marginTop: '20px', textAlign: 'center', border: '1px solid', padding: '20px', fontSize: '1.2em' }}>
                <p style={{ fontSize: '2em', marginBottom: '20px' }}>公式SNS</p>
                <a href="https://www.instagram.com/futsunoshop/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com/futsunoshop" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://futsuno.shop/shop/pages/line_campaign" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faLine} size="2x" />
                </a>
              </div>
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/instagram-stats" element={<InstagramStats />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
