export async function getCategories(){
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await res.json();
    console.log('getCategories response:', data);
    return Array.isArray(data?.data?.news_category) ? data.data.news_category : [];
  } catch (error) {
    console.error('Error in getCategories:', error);
    return [];
  }
}

export async function getNewsByCategoryId(category_id){
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    const data = await res.json();
    console.log('getNewsByCategoryId response for', category_id, ':', data);
    return Array.isArray(data?.data) ? data.data : [];
  } catch (error) {
    console.error('Error in getNewsByCategoryId:', error);
    return [];
  }
}