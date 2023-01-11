import pandas as pd
import re
import math



def recommend_movie(name=None, types=None, year=None, audience_rating=None, expert_rating=None, ratings=None):


  # Read in the data from the csv files
  movie_data = pd.read_csv("data/data_movies_1.csv")

  # Split the types in the movie_data data frame into separate rows
  # movie_data = pd.concat([movie_data, movie_data['types'].str.split(',', expand=True)], axis=1)

  # Trim leading and trailing white space from the types
  movie_data['types'] = movie_data['types'].str.strip()

  # Lowercase the types and the name
  movie_data['types'] = movie_data['types'].str.lower()
  movie_data['movie_name'] = movie_data['movie_name'].str.lower()



  def intersection(df_value, user_values):
    df_value = str(df_value)

    for t in str(user_values).split(","):
      if df_value.__contains__(t):
        return True
    
    return False
  
  def intersection_rating(df_value, user_values):
    df_value = str(df_value)

    for t in str(user_values).split(","):
      if df_value == t:
        return True
    
    return False

  # Subset the data based on the input parameters
  movie_subset = movie_data[
    (name is None or movie_data['movie_name'].str.contains(name, case=False)) &
    (types is None or movie_data['types'].apply(lambda movie_type: intersection(movie_type, types))) &
    (pd.isnull(year) or movie_data['year'] == year) &
    (pd.isnull(audience_rating) or (movie_data['audience_rating'] >= audience_rating - 10) &(movie_data['audience_rating'] <= audience_rating + 10)) &
    (pd.isnull(expert_rating) or (movie_data['expert_rating'] >= expert_rating - 10) &(movie_data['expert_rating'] <= expert_rating + 10)) &
    (ratings is None or movie_data['rating'].apply(lambda movie_rating: intersection_rating(movie_rating, ratings)))
  ]

  # If no movies match the input parameters, return "No movies found"
  # print(movie_subset)
  if movie_subset.shape[0] == 0:
    return "No movies found"

  # Otherwise, return the subset of movies
  return movie_subset


name = "inc"
types = None
year = None
audience_rating = None
expert_rating = None
rating = None

# result = recommend_movie(name=name, types="action,adventure", year=year, audience_rating=audience_rating, expert_rating=expert_rating, rating=rating)
# print(result)
year = 2022
print(type(year))
result = recommend_movie(year = 2021)
print(result)
# Print the movie name, year, and rating of the matching movies
# print(result)