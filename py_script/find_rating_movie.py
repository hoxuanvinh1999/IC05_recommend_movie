from rotten_tomatoes_client import RottenTomatoesClient
from rotten_tomatoes_client import RottenTomatoesClient, MovieBrowsingQuery, Service, Genre, SortBy, MovieBrowsingCategory
from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper
from urllib.error import HTTPError


import pandas as pd
import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def find_rating_movie(input_string):
  movie_scraper = MovieScraper(movie_title=input_string)
  try:
    movie_scraper.extract_metadata()
  except HTTPError as err:
      if err.code == 404:
          return {}
      else:
          return movie_scraper.metadata
  return movie_scraper.metadata


from selenium.webdriver.chrome.options import Options

def find_rating_movie_direct(input_string):
  # Create a ChromeOptions object to set the headless flag and to specify that no GUI should be shown
  chrome_options = Options()
  chrome_options.add_argument('--headless')
  chrome_options.add_argument('--no-sandbox')
  chrome_options.add_argument('--disable-dev-shm-usage')
  chrome_options.add_argument('--window-size=1920x1080')
  
  # Create a Chrome driver with the headless flag set
  driver = webdriver.Chrome(chrome_options=chrome_options)
  try:
    # Navigate to the given URL
    driver.get(input_string)
    
    # Find the first element that matches the given XPath expression
    element = driver.find_element(By.XPATH,'//score-board')

    
    # Find information of the movie
    infor = driver.find_element(By.XPATH,'//score-board/p[@slot="info"]')
    year = infor.text.split(',')[0]
    types = infor.text.split(',')[1]
    duration = infor.text.split(',')[2]

    # Get the movie name, rating, audience score, and expert score from the element
    movie_name = element.text.split('n')[0]
    audience_score = element.get_attribute('audiencescore')
    expert_score = element.get_attribute('tomatometerscore')
    rating = element.get_attribute('rating')
    
    # Use regular expressions to extract the movie name
    movie_name_pattern = "^(.+)(\s*)"    
    movie_name_match = re.search(movie_name_pattern, movie_name)

    
    movie_name = movie_name_match.group(1) if movie_name_match else ""

    # Return the movie information as a dictionary
    return {
      'Movie Name': movie_name,
      'Rating': rating,
      'Year': year,
      'Types': types,
      'Duration': duration,
      'Audience Score': audience_score,
      'Tomatometer Score': expert_score
    }
  except:
    # Return an empty dictionary if an error occurs
    return {}

def modified_name(name):
  modified_name = re.sub('\s', '_', name)
  modified_name = modified_name .replace(":", "")
  return str.lower(modified_name)