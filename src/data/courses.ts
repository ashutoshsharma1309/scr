export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    instructorBio: string;
    thumbnail: string;
    category: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    students: number;
    rating: number;
    language: 'en' | 'hi';
    outcomes: string[];
    fullDescription: string;
}

export const mockCourses: Course[] = [
    {
        id: '1',
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
        instructor: 'Dr. Sarah Smith',
        instructorBio: 'Experienced web architect with 10+ years in the industry.',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=web',
        category: 'Programming',
        level: 'Beginner',
        duration: '12 Weeks',
        students: 1250,
        rating: 4.8,
        language: 'en',
        outcomes: [
            'Master HTML5 & CSS3',
            'Understand Javascript Fundamentals',
            'Build responsive layouts',
            'Deploy your first website'
        ],
        fullDescription: 'This course is designed for absolute beginners who want to step into the world of web development. We start from scratch and build a solid foundation in the core technologies that power the modern web.'
    },
    {
        id: '7',
        title: 'Data Structures & Algorithms (DSA)',
        description: 'Master essential algorithmic patterns and data structures for technical interviews.',
        instructor: 'Prof. David Miller',
        instructorBio: 'Competitive programmer and DSA expert.',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=dsa',
        category: 'Computer Science',
        level: 'Intermediate',
        duration: '16 Weeks',
        students: 980,
        rating: 4.9,
        language: 'en',
        outcomes: [
            'Analyze time and space complexity',
            'Implement core data structures',
            'Master sorting and searching algorithms',
            'Apply dynamic programming to solve complex problems'
        ],
        fullDescription: 'DSA is the backbone of efficient software. This course covers everything from basic arrays to advanced graph algorithms, preparing you for technical interviews at top tech companies.'
    },
    {
        id: '2',
        title: 'Data Science Fundamentals',
        description: 'Master the art of data analysis and visualization using Python.',
        instructor: 'Prof. James Wilson',
        instructorBio: 'Data scientist and researcher.',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=data',
        category: 'Data Science',
        level: 'Intermediate',
        duration: '10 Weeks',
        students: 850,
        rating: 4.9,
        language: 'en',
        outcomes: [
            'Pandas & Numpy proficiency',
            'Data visualization techniques',
            'Basic statistical analysis',
            'Data cleaning workflows'
        ],
        fullDescription: 'Learn how to extract insights from raw data. This course focuses on practical Python tools used by data scientists every day.'
    },
    {
        id: '3',
        title: 'वेब विकास का परिचय',
        description: 'अपनी पहली वेबसाइट बनाने के लिए HTML, CSS और JavaScript की मूल बातें सीखें।',
        instructor: 'अनिल शर्मा',
        instructorBio: 'वरिष्ठ वेब डेवलपर और शिक्षक।',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=hindi-web',
        category: 'Programming',
        level: 'Beginner',
        duration: '12 सप्ताह',
        students: 3200,
        rating: 4.7,
        language: 'hi',
        outcomes: [
            'HTML और CSS में महारत',
            'जावास्क्रिप्ट की मूल बातें',
            'वेबसाइट डिजाइन करना',
            'अपनी साइट लाइव करना'
        ],
        fullDescription: 'यह कोर्स उन छात्रों के लिए है जो हिंदी में वेब विकास सीखना चाहते हैं। हम पूरी तरह से शुरुआत से शुरू करेंगे।'
    }
];
