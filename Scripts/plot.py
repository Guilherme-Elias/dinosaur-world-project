"""
    This piece of code will generate the random data set of ratings for the theme park
    as an image file (check "plot.jpeg" inside the "Images" folder)
    (please check the "About Us" page in order to see the image generated from this code)
    (the image is located right after the "Awards" section)
    (for more info about the references check "readMe.txt")
                                                                            - Guilherme
"""
# Importing the necessary modules
import matplotlib.pyplot as plt
import seaborn as sbrn
from random import choice

# Creating a list of options and defining the number of ratings
options = [0, 1, 2, 3, 4, 5]
number_of_ratings = 20_000

# Creating a list to store the overall data
data_set = list()

# The mechanism to randomize the ratings and store them into the raw dataset
for rating in range(number_of_ratings):
    data_set.append(choice(options))

# Filtering the dataset -> Counting the ratings
# (I've altered the counting proportions to make the proportions desired look more realistical)
rating_numbers = {
    "<2": (data_set.count(2) + data_set.count(1) + data_set.count(0)) // 40,
    "3": data_set.count(3) - 2650,
    "4": data_set.count(4) - 2200,
    "5": data_set.count(5)*3.8
}

# Transposing to a more suitable data structure
r_nums_list = [
    rating_numbers["<2"],
    rating_numbers["3"],
    rating_numbers["4"],
    rating_numbers["5"]
]

# Plotting code -> using Seaborn and Matplotlib
# Setting the labels and the data
labels = ["< 2 stars", "3 stars", "4 stars", "5 stars"]
data = r_nums_list.copy()

# Setting the color pallete (see "readMe.txt" to check the source)
pallete = sbrn.color_palette("ch:s=.25,rot=-.25")

# Defining the settings of the graph
plt.pie(x = data, labels = labels, colors = pallete, autopct='%1.1f%%')

# Showing the graph in the screen -> the matplotlib supports the download
plt.show()

# Note that every image generated can be slightly different since the values are randomized.
