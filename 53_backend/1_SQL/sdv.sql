CREATE TABLE comments1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    content VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO comments1 (author, content) 
VALUES ('HuXn', 'This is a great article!'),
       ('Jordan', 'I have a question about this topic.'),
       ('Charlie', 'Thanks for sharing this information.');


SELECT * FROM COMMENTS1;