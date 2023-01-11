from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import re


app = Flask(__name__)
CORS(app)

def recommend_movie(name=None, types=None, year=None, audience_rating=None, expert_rating=None, ratings=None):
  # Read in the data from the csv files
  movie_data = pd.read_csv("data/data_movies_1.csv")

  # Trim a input before we check it
  ratings = ratings.strip().replace(" ", "")

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
      if df_value.__contains__(t.strip()):
        return True
    
    return False

  def intersection_rating(df_value, user_values):
      df_value = str(df_value).strip()
      for t in str(user_values).split(","):
        if df_value == t.strip():
          return True
      
      return False  

  # Subset the data based on the input parameters
  movie_subset = movie_data[
    (name is None or name == "" or movie_data['movie_name'].str.contains(name, case=False)) &
    (types is None or types == "" or movie_data['types'].apply(lambda movie_type: intersection(movie_type, types))) &
    (pd.isnull(year) or movie_data['year'] == year) &
    (pd.isnull(audience_rating) or (movie_data['audience_rating'] >= audience_rating - 10) &(movie_data['audience_rating'] <= audience_rating + 10)) &
    (pd.isnull(expert_rating) or (movie_data['expert_rating'] >= expert_rating - 10) &(movie_data['expert_rating'] <= expert_rating + 10)) &
    (ratings is None or ratings == "" or movie_data['rating'].apply(lambda movie_rating: intersection_rating(movie_rating, ratings)))
  ]

  # If no movies match the input parameters, return "No movies found"
  # print(movie_subset)
  # if movie_subset.shape[0] == 0:
  #   return "No movies found"

  # Otherwise, return the subset of movies
  return movie_subset


@app.route('/recommend_movie')
def recommend_movie_api():
  # Get the input parameters from the request
  name = request.args.get('name')
  types = request.args.get('types')
  year = request.args.get('year')
  audience_rating = request.args.get('audience_rating')
  expert_rating = request.args.get('expert_rating')
  rating = request.args.get('rating')
  
  
  # Convert the input parameters to the correct data type
  year = int(year) if year else None
  audience_rating = int(audience_rating) if audience_rating else None
  expert_rating = int(expert_rating) if expert_rating else None
  
  # Call the recommend_movie function
  result = recommend_movie(name, types, year, audience_rating, expert_rating, rating)
  print(result)
  
  # Return the result as a JSON response
  return result.to_json(orient="records")

if __name__ == '__main__':
  app.run()