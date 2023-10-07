import { Component } from '@angular/core';
interface PortfolioItem {
  imageUrl: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  
  portfolioItems: PortfolioItem[] = [
    {
      imageUrl: '/assets/images/hero.jpg',
      category: 'Building',
      title: 'Tower Building'
    },
    {
      imageUrl: '/assets/images/about.jpg',
      category: 'Construction',
      title: 'Renovation'
    },
    {
      imageUrl: '/assets/images/cargo.jpg',
      category: 'Planning',
      title: 'Hospital Building'
    },
    {
      imageUrl: '/assets/images/about.jpg',
      category: 'Construction',
      title: 'Tower Building'
    },
    {
      imageUrl: '/assets/images/hero.jpg',
      category: 'Building',
      title: 'Tower Renovation'
    },
    {
      imageUrl: '/assets/images/about.jpg',
      category: 'Planning',
      title: 'Planning'
    },
    // Add more items here...
  ];

  selectedFilter = 'All';

  filterItems(filter: string): void {
    this.selectedFilter = filter;
  }

  get filteredItems(): PortfolioItem[] {
    return this.selectedFilter === 'All'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.category === this.selectedFilter);
  }
}
