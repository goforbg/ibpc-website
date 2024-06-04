// lib/parseMarkdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllFaqs() {
  const faqsDirectory = path.join(process.cwd(), 'content/faqs');
  const fileNames = fs.readdirSync(faqsDirectory);

  const faqs = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(faqsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      ...data,
      content,
    };
  });

  return faqs;
}
