import { useEffect, useState } from 'react';
import { fetchTutorials } from '../api';


interface Tutorial {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  videoUrl: string;
  completed: boolean;
}

function Tutorials() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getTutorials = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (difficulty) params.append('difficulty', difficulty);
        if (search) params.append('search', search);

        const response = await fetchTutorials(params.toString());
        setTutorials(response.data);
      } catch (err) {
        console.error('Failed to fetch tutorials:', err);
      } finally {
        setLoading(false);
      }
    };

    getTutorials();
  }, [category, difficulty, search]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tutorials</h1>

      <div className="flex gap-2 mb-4">
        <label htmlFor="category-select" className="sr-only">Select category</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-1"
          title="Select category"
        >
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Coding">Coding</option>
          <option value="AI">AI</option>
        </select>

        <label htmlFor="difficulty-select" className="sr-only">Select difficulty level</label>
        <select
          id="difficulty-select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border p-1"
          title="Select difficulty level"
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-1 flex-1"
        />
      </div>

      {loading ? (
        <p>Loading tutorials...</p>
      ) : tutorials.length === 0 ? (
        <p>No tutorials found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tutorials.map((tutorial) => (
            <li key={tutorial.id} className="border p-3 rounded">
              <h2 className="font-semibold">{tutorial.title}</h2>
              <p>{tutorial.category} — {tutorial.difficulty}</p>
              <video src={tutorial.videoUrl} controls className="w-full mt-2" />
              {tutorial.completed && <p className="text-green-600 mt-1">Completed</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tutorials;
