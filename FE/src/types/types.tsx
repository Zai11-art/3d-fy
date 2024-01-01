export interface ModelData {
  title: string;
  imgUrl: string;
  description: string;
  modelUrl: string;
  author: string;
  date: string;
  profileImage: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface InfoData {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

export interface ConfirmationData {
  title: string;
  description: string;
  // method: () => void;
}

export interface ViewContainerProps {
  scale: Object;
  position: number[];
  color: string;
  wireframe: boolean;
  wireframeThickness: Object;
  normalTexture: boolean;
}

export interface CarouselProps {
  imageUrl: string;
  heading: string;
  description: string;
}

export interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}
