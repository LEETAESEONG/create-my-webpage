export type ImageDataType = {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: string[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null;
  topic_submissions: {
    animals?: {
      status: string;
      approved_on: string;
    };
  };
  asset_type: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string | null;
      twitter_username: string | null;
      paypal_email: string | null;
    };
  };
  exif: {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  meta: {
    index: boolean;
  };
  public_domain: boolean;
  tags: Array<{
    type: string;
    title: string;
    source?: {
      ancestry: {
        type: {
          slug: string;
          pretty_slug: string;
        };
        category: {
          slug: string;
          pretty_slug: string;
        };
        subcategory?: {
          slug: string;
          pretty_slug: string;
        };
      };
      title: string;
      subtitle: string;
      description: string;
      meta_title: string;
      meta_description: string;
      cover_photo: {
        id: string;
        slug: string;
        alternative_slugs: {
          en: string;
          es: string;
          ja: string;
          fr: string;
          it: string;
          ko: string;
          de: string;
          pt: string;
        };
        created_at: string;
        updated_at: string;
        promoted_at: string;
        width: number;
        height: number;
        color: string;
        blur_hash: string;
        description: string;
        alt_description: string;
        breadcrumbs: string[];
        urls: {
          raw: string;
          full: string;
          regular: string;
          small: string;
          thumb: string;
          small_s3: string;
        };
        links: {
          self: string;
          html: string;
          download: string;
          download_location: string;
        };
        likes: number;
        liked_by_user: boolean;
        current_user_collections: string[];
        sponsorship: null;
        topic_submissions: {
          animals: {
            status: string;
            approved_on: string;
          };
        };
        asset_type: string;
        premium: boolean;
        plus: boolean;
        user: {
          id: string;
          updated_at: string;
          username: string;
          name: string;
          first_name: string;
          last_name: string;
          twitter_username: string | null;
          portfolio_url: string | null;
          bio: string | null;
          location: string | null;
          links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
          };
          profile_image: {
            small: string;
            medium: string;
            large: string;
          };
          instagram_username: string;
          total_collections: number;
          total_likes: number;
          total_photos: number;
          total_promoted_photos: number;
          total_illustrations: number;
          total_promoted_illustrations: number;
          accepted_tos: boolean;
          for_hire: boolean;
          social: {
            instagram_username: string;
            portfolio_url: string | null;
            twitter_username: string | null;
            paypal_email: string | null;
          };
        };
      };
    };
  }>;
  views: number;
  downloads: number;
  topics: Array<{
    id: string;
    title: string;
    slug: string;
    visibility: string;
  }>;
};

export async function getRandomImg(): Promise<string> {
  // client 환경에서 env파일의 데이터를 사용하려면 next_public_을 붙여야 한다.
  const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
  // local storage에 src가 있으면 로컬스토리지 꺼내서 보내기
  // 없으면 요청 보내서 가져오기
  const storageSrc = localStorage.getItem("src");
  if (storageSrc !== null) {
    return storageSrc;
  }
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ImageDataType = await response.json();
    localStorage.setItem("src", data.urls.full);
    return data.urls.full;
  } catch (error) {
    console.error("Failed to fetch image data:", error);
    throw error; // 오류를 던져서 호출한 쪽에서 처리하게 함
  }
}
