<div class="account">
	<!-- IF breadcrumbs.length -->
<ol class="breadcrumb">
	<!-- BEGIN breadcrumbs -->
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="url"><!-- ENDIF !@last -->
			<span itemprop="title">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	<!-- END breadcrumbs -->
</ol>
<!-- ENDIF breadcrumbs.length -->
	
	<div class="row account-menu">
	<div class="col-xs-12">
		<ul class="nav nav-pills pull-right">
			<li>
				<a href="{config.relative_path}/user/{userslug}" class="inline-block" id="profile">[[user:profile]]</a>
			</li>
			<!-- IF showHidden -->
			<li><a href="{config.relative_path}/user/{userslug}/edit">[[user:edit]]</a></li>
			<li><a href="{config.relative_path}/user/{userslug}/settings">[[user:settings]]</a></li>
			<!-- ENDIF showHidden -->
			<li class="dropdown bottom-sheet">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
			      [[user:more]] <span class="caret"></span>
			    </a>
				<ul class="dropdown-menu dropdown-menu-right">
					<!-- IF loggedIn -->
					<!-- IF !isSelf -->
					<!-- IF !banned -->
					<!-- IF !config.disableChat -->
					<li>
						<a component="account/chat" href="#">[[user:chat_with, {username}]]</a>
					</li>
					<!-- ENDIF !config.disableChat -->

					<li>
						<a component="account/flag" href="#">[[user:flag-profile]]</a>
					</li>
					<li class="divider"></li>
					<!-- ENDIF !banned -->
					<!-- ENDIF !isSelf -->
					<!-- ENDIF loggedIn -->


					<!-- IF !isSelf -->
					<!-- IF canBan -->
					<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
						<a component="account/ban" href="#">[[user:ban_account]]</a>
					</li>
					<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
						<a component="account/unban" href="#">[[user:unban_account]]</a>
					</li>
					<!-- ENDIF canBan -->
					<!-- IF isAdmin -->
					<li>
						<a component="account/delete" href="#" class="">[[user:delete_account]]</a>
					</li>
					<!-- ENDIF isAdmin -->
					<!-- ENDIF !isSelf -->

					<!-- IF showHidden -->
					<li><a href="{config.relative_path}/user/{userslug}/info">[[user:account_info]] <i class="fa fa-lock"></i></a></li>
					<!-- ENDIF showHidden -->

					<li class="divider"></li>
					<li><a href="{config.relative_path}/user/{userslug}/following">[[user:following]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/followers">[[user:followers]]</a></li>
					<li class="divider"></li>
					<li><a href="{config.relative_path}/user/{userslug}/topics">[[global:topics]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/posts">[[global:posts]]</a></li>
					<!-- IF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/best">[[global:best]]</a></li>
					<!-- ENDIF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/groups">[[global:header.groups]]</a></li>

					<!-- IF showHidden -->
					<li><a href="{config.relative_path}/user/{userslug}/bookmarks">[[user:bookmarks]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/watched">[[user:watched]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/ignored">[[user:ignored]]</a></li>
					<!-- IF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/upvoted">[[global:upvoted]]</a></li>
					<!-- IF !downvote:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/downvoted">[[global:downvoted]]</a></li>
					<!-- ENDIF !downvote:disabled -->
					<!-- ENDIF !reputation:disabled -->
					<!-- ENDIF showHidden -->

					<!-- BEGIN profile_links -->
					<!-- IF @first -->
					<li class="divider"></li>
					<!-- ENDIF @first -->
					<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a href="{config.relative_path}/user/{userslug}/{profile_links.route}"><i class="fa fa-fw {profile_links.icon}"></i> {profile_links.name}</a></li>
					<!-- END profile_links -->
				</ul>
			</li>
		</ul>
	</div>
</div>


	<div class="row">
		<div class="col-xs-12">
			<h1>[[pages:{template.name}, {username}]]</h1>
		
			<div class="groups list">
				<div component="groups/container" id="groups-list" class="row">
					<!-- IF !groups.length -->
					<div class="alert alert-warning text-center">[[groups:no_groups_found]]</div>
					<!-- ELSE -->
						<!-- BEGIN groups -->
	<div class="col-lg-4 col-md-6 col-sm-12" component="groups/summary" data-slug="{groups.slug}">
		<div class="panel panel-default">
			<a href="{config.relative_path}/groups/{groups.slug}" class="panel-heading list-cover" style="<!-- IF groups.cover:thumb:url -->background-image: url({groups.cover:thumb:url});<!-- ENDIF groups.cover:thumb:url -->">
				<h3 class="panel-title">{groups.displayName} <small>{groups.memberCount}</small></h3>
			</a>
			<div class="panel-body">
				<ul class="members">
					<!-- BEGIN members -->
					<li>
						<a href="{config.relative_path}/user/{groups.members.userslug}">
							<!-- IF groups.members.picture -->
							<img class="user-avatar" src="{groups.members.picture}" alt="{groups.members.username}" title="{groups.members.username}" />
							<!-- ELSE -->
							<div class="user-icon" style="background-color: {groups.members.icon:bgColor};" title="{groups.members.username}">{groups.members.icon:text}</div>
							<!-- ENDIF groups.members.picture -->
						</a>
					</li>
					<!-- END members -->
					<!-- IF groups.truncated -->
					<li class="truncated"><i class="fa fa-ellipsis-h"></i></li>
					<!-- ENDIF groups.truncated -->
				</ul>
			</div>
		</div>
	</div>
	<!-- END groups -->
					<!-- ENDIF !groups.length -->
				</div>
			</div>
		</div>
	</div>
</div>