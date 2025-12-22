const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { authMiddleware } = require('../middleware/auth.middleware');

const coursesPath = path.join(__dirname, '../data/courses.json');

// Get all courses
router.get('/', (req, res) => {
    try {
        const data = fs.readFileSync(coursesPath, 'utf8');
        let courses = JSON.parse(data);

        const { search, language, category } = req.query;

        if (search) {
            courses = courses.filter(c =>
                c.title.toLowerCase().includes(search.toLowerCase()) ||
                c.description.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (language) {
            courses = courses.filter(c => c.language === language);
        }

        if (category) {
            courses = courses.filter(c => c.category === category);
        }

        res.json({ success: true, count: courses.length, data: courses });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching courses' });
    }
});

// Get single course
router.get('/:id', (req, res) => {
    try {
        const data = fs.readFileSync(coursesPath, 'utf8');
        const courses = JSON.parse(data);
        const course = courses.find(c => c.id === req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.json({ success: true, data: course });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching course' });
    }
});

// Enroll in a course (Protected)
router.post('/:id/enroll', authMiddleware, (req, res) => {
    try {
        // In a real app, we'd update a database. For now, we'll just mock success.
        res.json({
            success: true,
            message: 'Successfully enrolled',
            courseId: req.params.id,
            userId: req.user.id
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Enrollment failed' });
    }
});

module.exports = router;
