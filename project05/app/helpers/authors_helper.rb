module AuthorsHelper
  def articles_by(author)
    @recent_articles.where(:author => author)
  end
  
end
