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

//  REGISTER TYPES
export interface RegisterValuesType {
  email: string;
  username: string;
  tag: string;
  bio: string;
  profilePic: { name: string };
  banner: { name: string };
  password: string;
  confirmPassword: string;
}

export interface LoginValuesType {
  email: string;
  password: string;
}

// UPLOAD 3D FILE TYPES
export interface Upload3dType {
  title: string;
  description: string;
  file: { name: string };
  tags: string;
}

export interface LoginValuesType {
  email: string;
  password: string;
}

export interface OnsubmitPropsType {
  resetForm: () => void;
}

// STATE
export interface User {
  username: string;
  profilePic: string;
  bio: string;
  tag: string;
  id: string;
  followers: User[];
  following: User[];
  likes: string;
  posts: Post[];
}

export interface Post {
  createdAt: string;
  updatedAt: string;
  id: string;
  profileImage: string;
  username: string;
  tag: string;
  title: string;
  userId: string;
  description: string;
  filePath: string;
  tags: string;
  views: Number;
  likes: Number;
}

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
  tags: String;
}
