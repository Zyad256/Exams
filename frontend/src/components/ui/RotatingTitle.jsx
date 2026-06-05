import { useState, useEffect } from 'react';
import './RotatingTitle.css';

const sentences = [
  // also add ✌️to the begining of sentences so sentences start with ✌️
  "✌️ ذاكر شوية، بصمّج شوية، المهم تعدّي من أول مرة✌️",
  "✌️ ذاكر تنجح، بصمّج تجيب مجموع، ومتخليش الدور التاني يبصملك✌️",
  "✌️ ذاكر للنجاح، بصمّج للمجموع، وتجنب الدور التاني بأي طريقة مشروعة✌️",
  "✌️ ذاكر تنجح، بصمّج تعلي المجموع، والباقي على الله✌️",
  "✌️ لما المذاكرة متكفّيش، البصمجة مبتقصرش✌️",
  "✌️ الامتحان أسهل مما تتخيل، بس محتاج شوية تركيز وشوية بصمجة✌️",
  "✌️ البصمجة هي طريقك للنجاح، بس متنساش تذاكر كويس✌️",
  "✌️ متخليش كلمة دور تاني تخش حياتك، معاك بصمجه كل حاجة هتبقى تمام✌️",
  "✌️ ذاكر تنجح، بصمّج تجيب مجموع، وخلي الدور التاني لغيرك✌️",
  "✌️ بصمّج على قد ما تقدر، وذاكر على قد ما تحتاج✌️",
  "طول ما الامتحان مش بكرة يبقي الدنيا لسه بخير\n ✌️محمد أبو بكر✌️"
];

export default function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-title-wrapper">
      <div className="rotating-title-container">
        <h2 className="rotating-title-text" key={index}>
          {sentences[index]}
        </h2>
      </div>
      <div className="exams-progress-badge">
        <div className="progress-number">3/5 <i className="fa-solid fa-circle-check" style={{ color: '#4ade80' }}></i></div>
        <div className="progress-label">🎉 Exams Done 🎉</div>
      </div>
    </div>
  );
}
