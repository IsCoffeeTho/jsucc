# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amenadue <amenadue@student.42adel.org.a    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2022/08/02 10:37:33 by amenadue          #+#    #+#              #
#    Updated: 2022/08/02 10:38:57 by amenadue         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

###

# This makefile is meant to provide some housekeeping on the repo

###

all: test

declare:
	@npx -p typescript tsc index.js --declaration --allowJs --emitDeclarationOnly --outDir ./

test:
	@npm test

re: declare test

.PHONY: all re declare d test t