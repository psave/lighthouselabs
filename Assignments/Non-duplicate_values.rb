# Non-duplicate values

def non_duplicated_values(values)
  # Write your code here
  frequencies = Hash.new(0)
  values.each { |number| frequencies[number] += 1 }
  frequencies = frequencies.sort_by { |x, y| y}
  new_array = frequencies.select { |key, value| value < 2}
  destination = []
  # your code
  new_array.each do |a, b|
    destination << a
  end
  return destination
end

#Shorter answer:
#def non_duplicated_values(values)
#  values.find_all { |x| values.count(x) == 1 }
#end