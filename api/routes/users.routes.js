const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware');

// Mock data for user progress
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({
        success: true,
        data: {
            stats: [
                { label: 'Courses in Progress', value: 3 },
                { label: 'Completed Courses', value: 5 },
                { label: 'Learning Hours', value: 42 },
                { label: 'Certificates', value: 2 },
                { label: 'Quiz Score', value: '88%' }
            ],
            enrolledCourses: [
                {
                    id: '1',
                    title: 'Introduction to Web Development',
                    progress: 45,
                    lastAccessed: '2025-12-18'
                },
                {
                    id: '3',
                    title: 'वेब विकास का परिचय',
                    progress: 80,
                    lastAccessed: '2025-12-19'
                },
                {
                    id: '5',
                    title: 'UX/UI Design Principles',
                    progress: 15,
                    lastAccessed: '2025-12-20'
                }
            ]
        }
    });
});

module.exports = router;
