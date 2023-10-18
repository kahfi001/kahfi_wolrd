// Enter all your detials in this file
// Logo images
import logogradient from './assets/logo.png';
import logo from './assets/logo2.svg';
// Profile Image
import profile from './assets/profile.png';
// Tech stack images
import html from './assets/techstack/html.png';
import css from './assets/techstack/css.png';
import js from './assets/techstack/js.png';
import php from './assets/techstack/php.png';
import laravel from './assets/techstack/laravel.png';
import react from './assets/techstack/react.png';
import tailwind from './assets/techstack/tailwind.png';
import bootstrap from './assets/techstack/bootstrap.png';
import vscode from './assets/techstack/vscode.png';
import github from './assets/techstack/github.png';
import git from './assets/techstack/git.png';
import npm from './assets/techstack/npm.png';
import postman from './assets/techstack/postman.png';
import figma from './assets/techstack/figma.png';
// Porject Images
import projectImage1 from './assets/projects/project1.jpg';
import projectImage2 from './assets/projects/project2.jpg';
import projectImage3 from './assets/projects/project3.jpg';
import projectImage4 from './assets/projects/project7.jpg';
import projectImage5 from './assets/projects/project8.png';

// Logos
export const logos = {
    logogradient: logogradient,
    logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
    name: 'Muhammad Kahfi D',
    tagline: 'I build things for web',
    img: profile,
    about: `I am a curious and passionate student at Surabaya State University, specializing in Information Management with
  a strong interest in web development. I have experience in web development using PHP and the Laravel
  framework. My curiosity drives me to constantly explore and enhance my skills in this field. I am excited to
  contribute my knowledge and enthusiasm for web development to a team or organization.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkdein: 'https://www.linkedin.com/in/muhammad-kahfi-djardjani/',
    github: 'https://github.com/kahfi001',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/kahfi_001/',
};

// Enter your Work Experience here
export const workDetails = [
    {
        Position: 'Web Profile Manager',
        Company: `Informatic Management Universitas Negeri Surabaya`,
        Location: 'Surabaya',
        Type: 'Full Time',
        Duration: 'Jan 2022 - Dec 2022',
    },
    {
        Position: 'Back End Developer',
        Company: `PT Adma Digital Solusi`,
        Location: 'Surabaya',
        Type: 'Internship',
        Duration: 'Aug 2022 - Dec 2022',
    },
    {
        Position: 'Product and Development',
        Company: `PT Radnet DIgital Indonesia`,
        Location: 'Surabaya',
        Type: 'Internship',
        Duration: 'Jan 2023 - Aug 2023',
    },
];

// Enter your Education Details here
export const eduDetails = [
    {
        Position: 'Informatic Management',
        Company: 'Universitas Negeri Surabaya - Surabaya',
        Location: 'Surabaya',
        Type: ' IPK 3.72/4.00',
        Duration: 'Aug 2020 - Present',
    },
];

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    php: php,
    laravel: laravel,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
    {
        title: 'Sistem Informasi Akademik',
        image: projectImage1,
        description: `Sistem informasi akademik terintegrasi secara reaal time dan update, aktivitas dan kegiatan di sekolah dan memantau kegiatan guru dan lain-lain`,
        techstack: 'HTML/CSS, PHP',
        // previewLink: "https://google.com",
        githubLink: 'https://github.com/kahfi001/Pemrograman-web-siakad',
    },
    {
        title: 'Web Berdonor',
        image: projectImage2,
        description: `Platform online yang bertujuan untuk menghubungkan para calon pendonor darah dengan lembaga-lembaga donor darah atau pusat transfusi darah. dan mendapatkan informasi terkait donor darah`,
        techstack: 'HTML/CSS, PHP,Laravel',
        previewLink: 'https://google.com',
        githubLink: 'https://github.com/kahfi001/berdonor',
    },
    {
        title: 'Sistem Informasi Laporan Kinerja Fakultas Vokasi',
        image: projectImage3,
        description: `Pengembangan sistem informasi laporan kinerja diharapkan agar para pengelola fakultas dan dosen dapat mengakses, memproses, dan menyajikan informasi kinerja dengan mudah dan efektif.`,
        techstack: 'HTML/CSS, Laravel',
        previewLink: 'https://simkvi.mi.unesa.ac.id/login',
        githubLink: 'https://github.com/kahfi001',
    },
    {
        title: 'RevExpress',
        image: projectImage4,
        description: `RevExpress adalah aplikasi yang dirancang untuk memberikan informasi tentang harga pengiriman dan pelacakan paket all-in-one.Tujuan utama dari aplikasi ini adalah membantu pengguna dalam merencanakan pengiriman dengan menghindari ketidakpastian biaya dan memastikan transparansi selama proses pengiriman..`,
        techstack: 'HTML/CSS/JS, NodeJs, ExpressJs',
        previewLink:
            'https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-18/',
        githubLink:
            'https://github.com/Kampus-Merdeka-Software-Engineering/FE-Balikpapan-18',
    },
    {
        title: 'Kayu Manis Cake',
        image: projectImage5,
        description: `Website Kayu Manis Cake adalah website UMKM yang menawarkan kue-kue lezat dan buket bunga yang indah`,
        previewLink: 'http://kayumanis.biz.id/',
        githubLink: 'https://github.com/kahfi001/UMKM',
    },
    //   {
    //     title: "Project title 4",
    //     image: projectImage4,
    //     description: `This is sample project description random things are here in description This is sample
    // project lorem ipsum generator for dummy content`,
    //     techstack: "HTML/CSS, JavaScript",
    //     previewLink: "https://google.com",
    //     githubLink: "https://github.com",
    //   },
    //   {
    //     title: "Project title 5",
    //     image: projectImage5,
    //     description: `This is sample project description random things are here in description This is sample
    // project lorem ipsum generator for dummy content`,
    //     techstack: "HTML/CSS, JavaScript",
    //     previewLink: "https://google.com",
    //     githubLink: "https://github.com",
    //   },
    //   {
    //     title: "Project title 6",
    //     image: projectImage6,
    //     description: `This is sample project description random things are here in description This is sample
    // project lorem ipsum generator for dummy content`,
    //     techstack: "HTML/CSS, JavaScript",
    //     previewLink: "https://google.com",
    //     githubLink: "https://github.com",
    //   },
];

// Enter your Contact Details here
export const contactDetails = {
    email: 'muhamad.kahfi46@gmail.com',
    phone: 'https://www.instagram.com/kahfi_001/',
};
