export interface ProductReview {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  product_name: string;
  price_inr: number | null;
  mrp_inr: number | null;
  rating: number | null;
  review_count: number | null;
  pros: string[];
  cons: string[];
  who_for: string | null;
  who_not_for: string | null;
  verdict: string | null;
  affiliate_url: string;
  category: string | null;
  read_time: string | null;
  status: 'draft' | 'published';
  created_at: string;
  published_at: string | null;
}
