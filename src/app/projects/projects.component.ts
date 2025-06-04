import { Component } from '@angular/core';
interface Project {
  name: string;
  category: 'devops' | 'cloud' | 'dev'; // Utiliser un type littéral pour les catégories
  imageUrl: string;
  link: string;
  date: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    { name: 'Gamemax : Cloud Gaming Platform', category: 'dev', imageUrl: 'images/gamemax.PNG', link: '/detailsgamemax', date: 'mars 2025 - mai 2025' },
    { name: 'Kubernetes Management Script', category: 'devops', imageUrl: 'images/kubernetesmanagement.jpg', link: '/k8sdetails', date: 'Mars 2025 - Mars 2025' },
    { name: 'Next-Level CI/CD Pipeline Architecture for Modern DevOps', category: 'devops', imageUrl: 'images/pipeline2.jpg', link: '/pipelinedetails', date: 'December 2024 - February 2025' },
    { name: 'Openstack : Private Cloud Infrastucture', category: 'cloud', imageUrl: 'images/openstack.jpg', link: '/detailsinfr', date: 'October 2024 - December 2024' },
    { name: 'Employee Attendance & Absence Management System', category: 'dev', imageUrl: 'images/employee.jpg', link: '/employeedetails', date: 'Juin 2024 - September 2024' },
    { name: 'Centralized Blood Transfusion Administration Platform', category: 'dev', imageUrl: 'images/donate.png', link: '/blooddetails', date: 'October 2023 - December 2023' },
    // Ajoute tous tes projets ici avec la bonne catégorie
  ];

  // Variable pour stocker le filtre actuellement sélectionné
  currentFilter: 'all' | 'devops' | 'cloud' | 'dev' = 'all';

  // Méthode pour définir le filtre lorsque l'utilisateur clique sur un bouton
  filterProjects(filter: 'all' | 'devops' | 'cloud' | 'dev'): void {
    this.currentFilter = filter;
  }

  // Getter pour obtenir les projets filtrés
  get filteredProjects(): Project[] {
    if (this.currentFilter === 'all') {
      return this.projects;
    } else {
      return this.projects.filter(project => project.category === this.currentFilter);
    }
  }

  // Ajoute ici des propriétés pour tes articles de blog si tu veux les gérer dynamiquement aussi
  blogArticles = [
      { title: 'How to build a successful freelance web developer business', category: 'Web Development', date: 'October 26, 2023', imageUrl: 'images/blog-thumbnail-1.jpg', link: 'blog-details.html' },
      { title: 'Implementing CI/CD with Jenkins and Docker: A step-by-step guide', category: 'DevOps', date: 'November 10, 2023', imageUrl: 'images/blog-thumbnail-2.jpg', link: 'blog-details.html' },
      { title: 'Understanding the benefits of serverless architecture in AWS', category: 'Cloud Computing', date: 'December 5, 2023', imageUrl: 'images/blog-thumbnail-3.jpg', link: 'blog-details.html' },
      // Ajoute d'autres articles de blog ici
  ];
}
