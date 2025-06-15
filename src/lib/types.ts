
export interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string; // The API returns img_url, but we'll use camelCase
}

export interface ApiResponse {
  events: Event[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
}
