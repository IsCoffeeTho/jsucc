# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amenadue <amenadue@student.42adel.org.a    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2022/08/02 10:37:33 by amenadue          #+#    #+#              #
#    Updated: 2022/08/03 11:25:09 by amenadue         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# This makefile is meant to provide some housekeeping on the repo

all: test

test:
	@npm test

.PHONY: all test