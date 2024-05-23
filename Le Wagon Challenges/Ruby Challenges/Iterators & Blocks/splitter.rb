def size_splitter(array, size)
  # TODO: Return an array of two arrays, the first containing
  #       words of length `size`, the second containing all the other words
  #       In addition to this split, each array should be *sorted*.

  # Ma méthode :
  #  words_sized = array.select { |word| word.size == size }
  #  words_not_selected = array.select { |word| word.size != size }

  # Méthode de refacto
  words_sized, words_not_selected = array.partition { |word| word.size == size }
  [words_sized.sort, words_not_selected.sort]
end

# words = %w[dog data ask my win two beer]
# p size_splitter(words, 3)

def block_splitter(array)
  # TODO: Return an array of two arrays, the first containing
  #       elements for which the given block yields true,
  #       the second containing all the other elements.
  #       No sort needed this time.

  beatle_selected, beatle_not_selected = array.partition { |element| yield(element) }
  [beatle_selected, beatle_not_selected]
end

beatles = ["John", "Paul", "Ringo", "George"]
p block_splitter(beatles) { |beatle| beatle.start_with?("P") }
